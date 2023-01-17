<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
          >
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-for="n in 6">
                  <v-list-item

                    :key="n"
                  >
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>

                      <v-list-item-subtitle class="message">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                      
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <v-textarea
          v-model="body"
          name="input-messages"
          label="Message"
        ></v-textarea>

        <v-btn 
          class="mr-4"
          type="submit"
          :disabled="invalid"
          @click="submit"
        >
          submit
        </v-btn>     
        <v-btn @click="clear">
          clear
        </v-btn>   

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    created() {

    },
    data: () => ({
      body: '',
      cards: ['Today'],
    }),
    computed: {
      invalid() {
        if(!this.body) {
          return true
        }
        return false
      },
    },
    methods: {
      clear() {
        this.body = ''
      },
      submit() {

      }
    },
  }
</script>

<style scoped>
.message {
  text-align: left;
}
</style>