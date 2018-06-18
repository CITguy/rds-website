<template>
  <div>
    <input v-model="speaks" value="Woof!" />
    <CodeSnippet lang="javascript">
      class Dog extends Animal {
        speak () {
          return {{speaks}};
        }
      }
    </CodeSnippet>
  </div>
</template>

<script>
  import CodeSnippet from '../components/CodeSnippet';
  export default {
    name: 'TestPage',
    components: {
      CodeSnippet,
    },
    data () {
      return {
        speaks: 'Woof!',
      };
    },
  };
</script>
