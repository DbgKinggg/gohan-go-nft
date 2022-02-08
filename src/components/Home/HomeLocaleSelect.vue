<template>
    <Listbox v-model="selectedLanguage">
        <ListboxButton
            class="relative w-28 py-3 pl-3 pr-10 text-left bg-white rounded-3xl shadow-md cursor-default focus:outline-none focus:ring-2 focus:ring-orange-300 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
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
                class="absolute w-lg py-1 mt-1 overflow-auto text-base bg-white rounded-3xl shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
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
import { ref } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

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
        const languages = [
            {
                'name': 'English',
                'value': 'en'
            },
            {
                'name': '简体中文',
                'value': 'zh_Hans'
            },
            {
                'name': '繁體中文',
                'value': 'zh_Hant'
            },
            {
                'name': '日本語',
                'value': 'ja'
            }
        ];

        const selectedLanguage = ref(languages[0])

        return {
            languages,
            selectedLanguage
        }
    }
}
</script>