<template>
    <label v-if="category === 'input'" :for="name" class="FormControl">
        <Typography :content="labelText" />
        <input
            :type="type"
            :id="name"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </label>

    <label
        v-if="category === 'select'"
        :for="name"
        class="FormControl"
        @input="$emit('update:modelValue', $event.target.value)"
    >
        <Typography :content="labelText" />
        <select :value="modelValue" :id="name" :name="name">
            <option value="" disabled>make a selection...</option>

            <option v-for="option in options" :value="option.value">
                {{ option.label }}
            </option>

            <option value="other">other:</option>
        </select>
    </label>

    <CTA v-if="category === 'submit'" :text="label" />
</template>

<script>
import CTA from '../elements/cta/CTA.vue'
import Typography from '../typography/Typography.vue'

export default {
    name: 'FormControl',
    components: {
        Typography,
        CTA,
    },
    props: {
        label: String,
        name: String,
        category: String,
        type: String,
        required: Boolean,
        options: {
            type: Object,
            default: [],
        },
        modelValue: String
    },
    computed: {
        labelText: function () {
            return `${this.label}${this.required ? ' *' : ''}`
        }
    }
}
</script>

<style>
</style>