<template>
    <main class="contact container">
        <Form @submit="(e) => handleSubmit(e)">
            <FormSection>
                <FormGroup>
                    <FormControl
                        category="input"
                        type="email"
                        label="email address"
                        name="email"
                        v-model="emailValue"
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <FormControl
                        label="client type"
                        name="clientType"
                        category="select"
                        :options="[
                            { label: 'residential', value: 'residential' },
                            { label: 'restaurant/bar', value: 'restaurant' },
                            { label: 'concert venue', value: 'venue' },
                        ]"
                        v-model="typeValue"
                        required
                    />
                    <FormControl
                        v-if="typeValue === 'other'"
                        label="other client type"
                        name="otherType"
                        v-model="otherTypeValue"
                        category="input"
                        type="text"
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <FormControl
                        label="first name"
                        name="firstName"
                        v-model="firstNameValue"
                        category="input"
                        type="text"
                        required
                    />
                    <FormControl
                        label="last name"
                        name="lastName"
                        v-model="lastNameValue"
                        category="input"
                        type="text"
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <FormControl
                        label="phone number"
                        name="phoneNumber"
                        v-model="phoneNumberValue"
                        category="input"
                        type="tel"
                        required
                    />
                </FormGroup>
            </FormSection>

            <FormGroup>
                <FormControl category="submit" label="book us" />
            </FormGroup>
        </Form>
    </main>
</template>

<script>
import Form from '../../components/form/Form.vue'
import FormSection from '../../components/form/FormSection.vue'
import FormGroup from '../../components/form/FormGroup.vue'
import FormControl from '../../components/form/FormControl.vue'
import Typography from '../../components/typography/Typography.vue'

export default {
    name: 'Contact',
    components: {
        Form,
        FormSection,
        FormGroup,
        FormControl,
        Typography,
    },
    data () {
        return {
            emailValue: '',
            typeValue: '',
            otherTypeValue: '',
            clientDetails: '',
            firstNameValue: '',
            lastNameValue: '',
            phoneNumberValue: '',
        }
    },
    methods: {
        handleSubmit (e) {
            e.preventDefault()
            console.log({
                emailValue: this.emailValue,
                typeValue: this.typeValue,
            })
        }
    }
}
</script>

<style>
</style>