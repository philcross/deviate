<template>
    <ul class="pagination" v-if="last > 1">
        <li class="paginate_button page-item first" :class="beforeDisabled">
            <button type="button" class="page-link" v-on:click="changePage(1)">
                <i class="la la-angle-double-left"></i>
            </button>
        </li>
        <li class="paginate_button page-item previous" :class="beforeDisabled">
            <button class="page-link" v-on:click="changePage(current-1)">
                <i class="la la-angle-left"></i>
            </button>
        </li>
        <li class="paginate_button page-item" v-for="page in pages" :key="page" :class="{ 'active': Number(current) === Number(page) }">
            <button class="page-link" v-on:click="changePage(page)">{{ page }}</button>
        </li>
        <li class="paginate_button page-item next" :class="afterDisabled">
            <button class="page-link" v-on:click="changePage(current+1)">
                <i class="la la-angle-right"></i>
            </button>
        </li>
        <li class="paginate_button page-item last" :class="afterDisabled">
            <button class="page-link" v-on:click="changePage(last)">
                <i class="la la-angle-double-right"></i>
            </button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'list',
        props: {
            current: { required: false, default: 1 },
            last: { required: false, default: 1 },
        },
        computed: {
            beforeDisabled: function () {
                return {
                    'disabled': this.current === 1,
                }
            },
            afterDisabled: function () {
                return {
                    'disabled': this.current === this.last,
                }
            },
            pages: function () {
                let pages = [];

                let min = Math.max(1, Number(this.current)-3);
                let max = Math.min(this.last, Number(this.current)+3);
                let i = min;

                while(i <= max) {
                    pages.push(i);
                    ++i;
                }

                return pages;
            }
        },
        methods: {
            changePage: function (page) {
                if (page === this.current) {
                    return;
                }

                this.$emit('change-page', {
                    page
                });
            }
        }
    }
</script>

<style scoped>
    .pagination {
        justify-content: flex-end;
    }

    .pagination .page-item {
        margin-left:.4rem
    }

    .pagination .page-item > .page-link {
        border-radius:50%;
        cursor:pointer;
        display:inline-block;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -moz-justify-content:center;
        -ms-justify-content:center;
        -webkit-box-pack:center;
        -ms-flex-pack:center;
        justify-content:center;
        -moz-align-items:center;
        -ms-align-items:center;
        -webkit-box-align:center;
        -ms-flex-align:center;
        align-items:center;
        text-align:center;
        vertical-align:middle;
        height:2.25rem;
        min-width:2.25rem;
        vertical-align:middle;
        padding:.5rem;
        text-align:center;
        position:relative;
        font-size:1rem;
        line-height:1rem;
        font-weight:400
    }

    .pagination .page-item > .page-link > i {
        font-size:1rem;
        text-align:center;
        display:inline-block
    }

    @media (max-width:768px) {
        .pagination .page-item:first-child {
            margin-left:0!important
        }

        .pagination {
            -moz-justify-content:center!important;
            -ms-justify-content:center!important;
            -webkit-box-pack:center!important;
            -ms-flex-pack:center!important;justify-content:center!important
        }
    }

    .pagination .page-item > .page-link {
        color:#898b96;
        border:0
    }

    .pagination .page-item.first > .page-link,
    .pagination .page-item.last > .page-link,
    .pagination .page-item.next > .page-link,
    .pagination .page-item.previous > .page-link {
        background:#ebe9f2
    }

    .pagination .page-item.first > .page-link:hover,
    .pagination .page-item.last > .page-link:hover,
    .pagination .page-item.next > .page-link:hover,
    .pagination .page-item.previous > .page-link:hover {
        background:#716aca;
        color:#fff
    }

    .pagination .page-item.active > .page-link {
        background:#716aca;
        color:#fff
    }

    .pagination .page-item:hover > .page-link {
        background:#716aca;
        color:#fff
    }

    .pagination .page-item.disabled:hover > .page-link,
    .pagination .page-item.disabled > .page-link {
        opacity:.6
    }
</style>
