<template>
    <horizontal-form v-on:submit="uploadImage">
        <form-row :form="form" name="image" label="Select Image" helper="Pick a new image to use for this collection. The best images to use are horizontal layouts as they will be cropped to fit into spaces available." :columns="[3,6]">
            <input class="form-control m-input m-input--air" type="file" name="image" id="file" ref="file" v-on:change="handleFileSelect">
        </form-row>

        <form-actions>
            <brand-button :actioning="form.isSubmitting">Upload Image</brand-button>
            <router-link :to="cancelUrl">
                <secondary-button>Cancel</secondary-button>
            </router-link>
        </form-actions>
    </horizontal-form>
</template>

<script>
    import Form from '@modules/forms/Form';
    import Toast from '@modules/alerts/Toast';

    import HorizontalForm from '@components/forms/HorizontalForm';
    import FormActions from '@components/portlets/footers/FormActions';
    import BrandButton from '@components/buttons/submit/BrandButton';
    import SecondaryButton from '@components/buttons/basic/SecondaryButton';
    import FormRow from '@components/forms/layouts/FormRow';

    export default {
        name: 'edit-image-tab',
        components: {
            FormRow,
            SecondaryButton,
            BrandButton,
            FormActions,
            HorizontalForm},
        props: {
            collection: { required: true },
        },
        computed: {
            cancelUrl: function () {
                return '/activity-collections/' + this.collection.id;
            },
            form: function () {
                return new Form({
                    image: '',
                });
            }
        },
        methods: {
            uploadImage: function () {
                this.form.upload('/activity-collections/'+this.collection.id+'/image')
                    .then(response => {
                        (new Toast).success('The image has been successfully uploaded.');
                        this.$router.push('/activity-collections/' + this.collection.id);
                    })
                    .catch(error => console.log(error));
            },
            handleFileSelect: function () {
                this.form.image = this.$refs.file.files[0];
            }
        }
    }
</script>
