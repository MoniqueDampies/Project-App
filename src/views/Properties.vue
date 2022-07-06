<template>
    <div class="properties">
        <h1>
            all properties
        </h1>
        <div class="container">
            <div v-for="property of properties" class="card" :key="property.id">
                <div id="property-card" class="row text-centre">
                    <div class="col-8 p-3">
                        <h3>{{ property.address.street }}</h3>
                        <img :src="property.image" :alt="property.address.street" class="w-50 text-centre" />
                    </div>
                    <div class="col-6 p-3 text-centre mt-4 mb-4 mx-1">
                        <table class="customTable py-3 px-3 text-centre">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Size</th>
                                    <th>Bedrooms</th>
                                    <th>Bathrooms</th>
                                    <th>Region</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{ property.type }}</td>
                                    <td>{{ property.size }} Sq Ft</td>
                                    <td><i class="fa-solid fa-bed"></i> {{ property.rooms.bedrooms }}</td>
                                    <td><i class="fa-solid fa-toilet"></i> {{ property.rooms.bathrooms }}</td>
                                    <td>{{ property.address.region }}</td>
                                    <td>R{{ property.price }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    data() {
        return {
            properties: [],
        };
    },
    mounted() {
        fetch("http://localhost:3000/properties")
            .then((res) => res.json())
            .then((data) => (this.properties = data));

    }
}

</script>

<style scoped>

#property-card{
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: #f4f4f4;
}
div{
    display: block;
    margin-left: auto;
    margin-right: auto;
}


img{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
table.customTable {
    width: 100%;
    background-color: #FFFFFF;
    border-collapse: collapse;
    border-width: 1px;
    border-color: #7EA8F8;
    border-style: solid;
    color: #000000;
    position: relative;
    left: 50%;
}

table.customTable td,
table.customTable th {
    border-width: 1px;
    border-color: #7EA8F8;
    border-style: solid;
    padding: 7px;
}

table.customTable thead {
    background-color: #7EA8F8;
}


</style>