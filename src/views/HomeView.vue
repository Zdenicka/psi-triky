<template>
  <div >
    <div v-if="triky.length">
      <div v-for="trik in triky" :key="trik.id">
        <jedenTrik 
          :trik="trik"
          @delete = "handleDelete" 
          @complete = "handleComplete" 
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import jedenTrik from '@/components/jedenTrik.vue'
import { onMounted, ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
    jedenTrik
  },

  setup(){
    
    const triky = ref([])
    onMounted (() => {
      fetch ('http://localhost:3000/triky')
        .then (res => res.json())
        .then (data => triky.value = data)
        .catch (err => console.log(err.message))
    })

    //předávám sem id mazanýho triku a tady filtruju všechny id triků v poli a vracím (tedy nechávám) jen ty, které neodpovídají id smazaného
    const handleDelete = (id) => {
      triky.value = triky.value.filter((trik) => {
        return trik.id !== id
      })
    }    
    
    const handleComplete = (id) => {
      let p = triky.value.find(trik => {
        return trik.id === id
      })
      p.complete = !p.complete
    }
    
    
    return {
      triky,
      handleDelete,
      handleComplete
    }

  }
}
</script>
