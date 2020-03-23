<template>
  <v-app>
    <v-navigation-drawer app temporary fixed v-model="sideNav">
    </v-navigation-drawer>
    <v-toolbar fixed color="primary" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">
          VueShare
        </router-link> 
      </v-toolbar-title> 
      <v-spacer></v-spacer>
      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="accent" single-line
       hide-details> </v-text-field>
       <v-spacer></v-spacer>
       <v-toolbar-items class="hidden-xs-only">
         <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link" >
         <v-icon class="hidden-sm-only">{{item.icon}}</v-icon>
         {{item.title}}
         </v-btn>
       </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-container class="mt-4">
      <router-view/>
      </v-container>
    </main> 
  </v-app>
</template>

<script>
export default {
  name:'App',
  data(){
    return{
      sideNav:false
    }
  },
  computed:{

    horizontalNavItems(){
      return[
        {icon:'chat', title:'Posts',link:'/posts'},
        {icon:'lock_open', title:'Sign In',link:'/signin'},
        {icon:'create', title:'Sign Up',link:'/signup'}
      ]
    }
  },
  methods:{
    toggleSideNav(){
      this.sideNav=!this.sideNav;
    }
  }
};
</script>