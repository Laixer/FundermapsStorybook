<script setup lang="ts">
import ButtonComponent from '@components/ButtonComponent.vue';
import ListDefinition from '@components/ListDefinition.vue';
import ListLegenda from '@components/ListLegenda.vue';
import LinkComponent from '@components/Links/LinkComponent.vue';
import LinkBack from '@components/Links/LinkBack.vue';
import LinkMenu from '@components/Links/LinkMenu.vue';
import IconComponent from '@components/Icons/IconComponent.vue';
import { ColorValue} from './utilityTypes.ts'

const definitionList = [{
  name: 'name',
  label: 'Name',
  value: 'John Doe'
}, {
  name: 'email',
  label: 'Email',
  value: 'Stuff' 
}]

const legendaList = [{
  name: 'Monitoring',
  color: '#b54cb0'
},
{
  name: 'Notitie',
  color: '#8c4bb6'
},
{
  name: 'Snelle scan',
  color: '#5b4ab7'
},
] satisfies {name: string, color: ColorValue}[]
</script>

<template>
  <ButtonComponent outline ></ButtonComponent>
  <ListDefinition :list-items="definitionList"></ListDefinition>
  <ListLegenda :items="legendaList"></ListLegenda>
  <LinkComponent label="Link"></LinkComponent>
  <LinkBack label="Link"></LinkBack>
  <LinkMenu icon="chat" label="Something"></LinkMenu>
  <IconComponent source="facade" name="inpandig"></IconComponent>
</template>

<style scoped>


</style>
