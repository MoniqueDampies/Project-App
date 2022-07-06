<template>
<div class="property">
    <h1>
        single properties {{$route.params.id}}
    </h1>
        <div class="container" v-if="property">
            <div class="card">
                <div class="row d-flex">
                    <div class="col-6">
                        <img :src="property.image" :alt="property.address.street" class="w-50 text-centre" />
                    </div>
                    <div class="col-6">

                        {{ property.address.street }}



                    </div>
                </div>
            </div>
        </div>
        <div class="container" v-else>
            <h2>Loading Property</h2>

        </div>



</div>


</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            properties: null,
        };
    },
    mounted() {
        fetch("http://localhost:3000/properties/" + this.id)
            .then((res) => res.json())
            .then((data) => (this.properties = data))
            .catch((err) => console.log(err.message));

    }
}

</script>