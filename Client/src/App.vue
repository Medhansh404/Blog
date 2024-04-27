<template>
  <HeaderView class="page-header"/>
  <router-view />
  <FooterView class="page-footer" />

 </template>
 
<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
 export default{
  data(){},
  components:{HeaderView, FooterView}
 }
 </script>
 
 <style>
.page-header{
  position: relative;
  bottom:0;
  width: 100vw;
}
.page-footer{
  position: relative;
  top:0;
  width: 100vw;
}
 </style>