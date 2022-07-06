<template>
    <div class="properties">
        <h1>
            all properties
        </h1>
        <div class="products-container">
            <div v-for="property of properties" class="card" :key="property.id">
            <img :src="property.image" :alt="property.address.street" class="w-25 text-centre"/>
                {{ property.address.street }}
            </div>
        </div>
    </div>


</template>

<script>
export default {
    data() {
        return {
            properties: [
            ],
        };
    },
    mounted(){
        fetch("http://localhost:3000/properties")
        .then((res) => res.json())
        .then((data) => (this.properties = data));

    }
}

</script>

<style scoped>
</style>