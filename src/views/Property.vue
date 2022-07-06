<template>
<div class="property">
    <h1>
        single properties {{$route.params.id}}
    </h1>
        <div class="container">
            <div v-for="property of properties" class="card" :key="property.id">
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



</div>


</template>