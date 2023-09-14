<template>
    <div >
    <form @submit.prevent="handleSubmit" class="q-gutter-md q-pa-xl q-mt-xl">
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

        <q-btn type="submit" color="primary" text-color="white" label="Přidat trik" />
    </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const povel = ref('')
        const popis = ref('')
        const router = useRouter()

        const handleSubmit = () => {
            let trik = {
                povel: povel.value,
                popis: popis.value,
                complete: false
            }
            fetch('http://localhost:3000/triky', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(trik)
            }).then(() => {
                router.push('/')
            }). catch((err) => console.log(err))
        }


        return {
            povel,
            popis,

            handleSubmit
        }

    }

}
</script>

<style>

</style>