<template>
    <Listbox v-model="selectedLanguage">
        <ListboxButton
            class="relative w-28 py-3 pl-3 pr-10 text-sm md:text-base md:w-32 text-left shadow-md bg-white hover:bg-gray-200 active:bg-gray-300 rounded-3xl hover:-translate-y-0.5 transform transition focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:outline-none focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500"
        >
            <span class="block truncate">{{ selectedLanguage.name }}</span>
            <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
        </ListboxButton>

        <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <ListboxOptions
                class="absolute z-20 w-lg py-1 mt-1 overflow-auto text-base bg-white rounded-3xl shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
                <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="language in languages"
                    :key="language.value"
                    :value="language"
                    as="template"
                >
                    <li
                        :class="[
                            active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-10 pr-4',
                        ]"
                    >
                        <span
                            :class="[
                                selected ? 'font-medium' : 'font-normal',
                                'block truncate',
                            ]"
                        >{{ language.name }}</span>
                        <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                        >
                            <CheckIcon class="w-5 h-5" aria-hidden="true" />
                        </span>
                    </li>
                </ListboxOption>
            </ListboxOptions>
        </transition>
    </Listbox>
</template>

<script>
import { ref, watch, computed } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import translations from '../../lang/translations'

export default {
    components: {
        Listbox,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
        CheckIcon,
        SelectorIcon
    },
    setup() {
        const { locale, setLocaleMessage } = useI18n({ useScope: 'global' })

        // setup languages
        const languages = []
        for (const lang in translations) {
            if (translations.hasOwnProperty(lang)) {
                languages.push({
                    name: translations[lang].name,
                    value: lang
                });
            }
        }

        function setLanguage(lang) {
            locale.value = lang

            // set new url without reloading
            const path = computed(() => route.path)
            getNewUrl(path.value, lang)
            return lang;
        }

        const loadLanguage = (lang) => {
            if (!translations[lang] || typeof translations[lang].load !== 'function') {
                console.error('Unable to load translations for "' + lang + '", "load" function is missing!')

            }

            return translations[lang].load().then(function (messages) {
                setLocaleMessage(lang, messages.default || messages);

                return setLanguage(lang);
            }).catch(function (error) {
                console.error('Failed to load "' + lang + '" translation.', error);
            });
        }

        const localeFoundIndex = languages.findIndex(language => language.value === locale.value)
        const selectedLanguage = ref(
            localeFoundIndex !== -1
                ? languages[localeFoundIndex]
                : languages[0]
        )

        const route = useRoute();

        // get the new url without reloading the page
        const getNewUrl = (rawUrl, locale) => {
            // find all indices
            const slashIndices = []
            for (let i = 0; i < rawUrl.length; i++) {
                if (rawUrl[i] == "/") {
                    slashIndices.push(i)
                }
            }

            let newUrl = '/' + locale
            if (slashIndices.length === 1) { // this is the default language
                newUrl += rawUrl.substr(slashIndices[0])
            } else if (slashIndices.length > 1) { // use the last index
                newUrl += rawUrl.substr(slashIndices.pop())
            }

            history.pushState(
                {},
                null,
                newUrl
            )
        }


        watch(selectedLanguage, async (newLocale) => {
            // set locale
            if (newLocale.value) {
                loadLanguage(newLocale.value)
            }
        })

        return {
            languages,
            selectedLanguage,
            locale
        }
    }
}
</script>