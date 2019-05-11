<template>
    <div class="background-gray-lightest">
        <div class="container flex flex-between  "
             :class="$style['ico-group']"
        >
            <div v-for="item in data"
                 class="flex flex-column flex-middle"
            >
              <base-icon :icon="item.ico" circle="84"></base-icon>
                <h3
                >{{item.title}}</h3>
                <p class="padding-top-smaller">
                    {{item.subtitle}}
                </p>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        props: {
            data: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style lang="less" module>
    .ico-group {
        padding: 62px 0;

    }

    .ico-group > div {

        h3 {
            margin-top: 24px;
            color: #000;
            font-family: '宋体';
            font-weight: bold;
        }

        i {
            font-size: 40px;
            color: @global-color-primary;
        }


    }
</style>
