<template>
  <v-app id="app">
     <v-app-bar  class="ottu-header" app>
    
         <v-layout row justify-center align-center class="height100">
            <v-flex class="d-flex" justify-space-between xs9 sm9 md9 >
               <div> 
                 <v-img  src="images/logo.png"
                  height = "35"
                  width="103"/>
                </div>
                <a href="#0" class="lang-toggler">بالعربي</a>
            </v-flex>
         </v-layout>
       
    </v-app-bar>
    <!-- <PaymentRequest/> -->
    <Success/>
      <v-footer class="ottu-footer" padless dark>
       <div class="social-icons">
         <a href="#0" class="social__link"><i class="fab fa-facebook-f"></i></a>
         <a href="#0" class="social__link"><i class="fab fa-twitter"></i></a>
         <a href="#0" class="social__link"><i class="fab fa-instagram"></i></a>
       </div>
      </v-footer>
  </v-app>
</template>

<script>
import Success from './components/Success.vue'
// import PaymentRequest from './components/PaymentRequest.vue'
export default {
  name: 'App',
  components: {
  //  PaymentRequest
  Success
  }
}
</script>

<style>

</style>
