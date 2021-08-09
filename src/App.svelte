<script>
  import { Router } from '@roxi/routify'
  import { routes } from '../.routify/routes'
</script>

<Router {routes} />

<style>
  @import url('https://fonts.googleapis.com/css2?family=MonteCarlo&family=Poppins&display=swap');
  :global(*){
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
  }
</style>
