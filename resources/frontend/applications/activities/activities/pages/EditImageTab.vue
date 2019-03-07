<template>
    <horizontal-form v-on:submit="uploadImage">
        <form-row :form="form" name="image" label="Select Image" helper="Pick a new image to use for this activity. The best images to use are horizontal layouts as they will be cropped to fit into spaces available." :columns="[3,6]">
            <input class="form-control m-input m-input--air" type="file" name="image" id="file" ref="file" v-on:change="handleFileSelect">
        </form-row>

        <form-actions>
            <danger-button v-on:click="deleteImage" class="pull-right">Delete</danger-button>
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
    import DangerButton from '@components/buttons/basic/DangerButton';

    export default {
        name: 'edit-image-tab',
        components: {
            DangerButton,
            FormRow,
            SecondaryButton,
            BrandButton,
            FormActions,
            HorizontalForm},
        props: {
            collection: { required: true },
            activity: { required: true }
        },
        computed: {
            cancelUrl: function () {
                return '/activity-collections/' + this.collection.id + '/activities/'+this.activity.id;
            },
            form: function () {
                return new Form({
                    image: '',
                });
            }
        },
        methods: {
            uploadImage: function () {
                this.form.upload('/activity-collections/'+this.collection.id+'/activities/'+this.activity.id+'/image')
                    .then(() => {
                        (new Toast).success('The image has been successfully uploaded.');
                        this.$router.push('/activity-collections/' + this.collection.id+'/activities/'+this.activity.id);
                    })
                    .catch(error => console.log(error));
            },
            deleteImage: function () {
                window.axios.delete('/activity-collections/'+this.collection.id+'/activities/'+this.activity.id+'/image')
                    .then(() => (new Toast).success('The image has been deleted. The image for the collection will be used until you upload a new image.'))
                    .catch(error => console.log(error));
            },
            handleFileSelect: function () {
                this.form.image = this.$refs.file.files[0];
            }
        }
    }
</script>
