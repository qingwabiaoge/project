<template>
    <div class="row row-children-padding-larger" v-if="data">
        <div v-for="item in data" class="col-md-3">
            <div class=" hover-underline hover-shadow-transition ">

                <div class="hover-child-image-scale">
                    <!--hover-child-image-scale必须放到这里-->
                    <img v-lazy="item.image" :alt="item.title">
                </div>
                <div class="padding">
                    <h4>{{item.title}}</h4>
                    <p :class="$style.p">
                        {{item.info}}
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>



<style lang="less" module>
    .p:empty {
        display: none
    }
</style>
