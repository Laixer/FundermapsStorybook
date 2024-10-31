<script setup lang="ts">
import ButtonComponent from '@components/ButtonComponent.vue';
import CardComponent from '@components/CardComponent.vue';
import ListDefinition from '@components/ListDefinition.vue';
import ListLegenda from '@components/ListLegenda.vue';
import LinkComponent from '@components/Links/LinkComponent.vue';
import LinkBack from '@components/Links/LinkBack.vue';
import LinkMenu from '@components/Links/LinkMenu.vue';
import IconComponent from '@components/Icons/IconComponent.vue';
import AccordionGroup from '@components/Accordion/AccordionGroup.vue';
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


const accordionItems = [{
  id: 1,
  name: 'Item 1',
  open: false
}, {
  id: 2,
  name: 'Item 2',
  open: false
}, {
  id: 3,
  name: 'Item 3',
  open: true
}]
</script>

<template>
  <ButtonComponent outline ></ButtonComponent>
  <CardComponent title="Stuff" >
    <p>Trying some stuff out</p>
  </CardComponent>
  <ListDefinition :list-items="definitionList"></ListDefinition>
  <ListLegenda :items="legendaList"></ListLegenda>
  <LinkComponent label="Link"></LinkComponent>
  <LinkBack label="Link"></LinkBack>
  <LinkMenu icon="scan" label="Something"></LinkMenu>
  <IconComponent source="facade" name="inpandig"></IconComponent>
  <IconComponent source="classification" name="a"></IconComponent>

  <AccordionGroup :items="accordionItems" :toggle-callback="(visibility: boolean)=>console.log(visibility)">
    <template #item="{name}">
      <ul>
        <li>This is an item for {{ name }}</li>
      </ul>
    </template>
   </AccordionGroup>
</template>

<style scoped>


</style>
