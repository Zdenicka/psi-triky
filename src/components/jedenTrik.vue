<template>
    <div class="trik" :class="{ complete: trik.complete }">
        <div class="actions">
            <h3 @click="showPopis=!showPopis">{{ trik.povel }}</h3>
            <div class="icons">
                <!--id přidávám do router linku jako parametr, protože je i v adrese (a má tam stejný název)-->
                <router-link :to="{ name: 'EditTrik', params: { id: trik.id } }">
                    <q-icon class="ikony" name="edit" size="2em" />
                </router-link>
                <q-icon @click="deleteTrik" class="ikony" name="delete_forever" size="2em" />
                <q-icon @click="toggleComplete" class="ikony tick" name="check" size="2em" />

            </div>
        </div>
        <div class="popis" v-if="showPopis">
            <p>{{ trik.popis }}</p>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'

export default {
    props: [ 'trik' ],
    //druhý atribut se používá pro emitování
    setup(props, emit) {
        const showPopis = ref(false)
        //jen zjednodušení na použití do funkcí        
        const uri = ref('http://localhost:3000/triky/' + props.trik.id)

        
        const deleteTrik = () => {
            fetch (uri.value, { method: 'DELETE' })
                .then (() => emit.emit('delete', props.trik.id))
                .catch (err => console.log(err))
        }

        const toggleComplete = () => {
            fetch (uri.value, { 
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify ({complete: !props.trik.complete})
            })
                .then (() => emit.emit('complete', props.trik.id))
                .catch (err => console.log(err))
        }


        return {
            showPopis,
            uri,
            deleteTrik,
            toggleComplete
        }
    },

}
</script>

<style>

</style>