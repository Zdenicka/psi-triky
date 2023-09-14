<template>
    <form class="q-gutter-md q-pa-xl q-mt-xl">
        <q-input 
            outlined
            type="text"
            v-model="povel" 
            label="Povel" 
            required 
        />
        <q-input
            v-model="popis"
            outlined
            type="textarea"
            label="Popis triku"
            required
        />

        <q-btn type="submit" color="primary" text-color="white" label="Upravit trik" />
    </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'



export default {
    props: ['id'],

    setup(props) {
        const povel = ref('')
        const popis = ref('')
        const router = useRouter()
        const uri = ref('http://localhost:3000/triky/' + props.id)


        onMounted (() => {
            fetch(uri.value)
            .then(res => res.json())
            .then(data => {
                povel.value = data.povel
                popis.value = data.popis
            })
        })





        return {
            povel,
            popis,
        }

    }

}
</script>

<style>

</style>