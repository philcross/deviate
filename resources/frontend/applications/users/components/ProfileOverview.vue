<template>
    <div class="m-portlet m-portlet--full-height  ">
        <div class="m-portlet__body">
            <div v-if="user">
                <div class="m-card-profile">
                    <div class="m-card-profile__pic">
                        <div class="m-card-profile__pic-wrapper">
                            <img :src="user.avatar.url" alt="" />
                        </div>
                    </div>
                    <div class="m-card-profile__details">
                        <span class="m-card-profile__name">{{ user.name.forename }} {{ user.name.surname }}</span>
                        <a href="" class="m-card-profile__email m-link">{{ user.email }}</a>
                    </div>
                </div>
                <ul class="m-nav m-nav--hover-bg m-portlet-fit--sides">
                    <li class="m-nav__separator m-nav__separator--fit"></li>
                    <li class="m-nav__item">
                        <router-link :to="rootUrl" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-profile-1"></i>
                            <span class="m-nav__link-text">Update details</span>
                        </router-link>
                    </li>
                    <li class="m-nav__item">
                        <router-link :to="rootUrl + '/avatar'" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-share"></i>
                            <span class="m-nav__link-text">Avatar</span>
                        </router-link>
                    </li>
                    <li class="m-nav__item">
                        <router-link :to="rootUrl + '/usergroups'" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-chat-1"></i>
                            <span class="m-nav__link-text">Usergroups</span>
                        </router-link>
                    </li>
                    <li class="m-nav__separator m-nav__separator--fit"></li>
                    <li class="m-nav__item">
                        <router-link :to="rootUrl + '/deactivate'" class="m-nav__link">
                            <i class="m-nav__link-icon flaticon-lifebuoy text-danger"></i>
                            <span class="m-nav__link-text text-danger">Deactivate / Delete</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <large-spinner v-else></large-spinner>
        </div>
    </div>
</template>

<script>
    import LargeSpinner from '@components/spinners/LargeSpinner';

    export default {
        name: 'profile-overview',
        components: {
            LargeSpinner
        },
        props: {
            user: { required: false, default: null }
        },
        computed: {
            rootUrl: function () {
                return '/users/' + this.user.id;
            }
        }
    }
</script>
