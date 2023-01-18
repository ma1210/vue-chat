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
                <template v-for="(data, index) in messages">
                  <v-list-item

                    :key="index"
                  >
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>

                      <v-list-item-subtitle class="message">
                        {{ data.message }}
                      </v-list-item-subtitle>
                      
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="index !== 6"
                    :key="`divider-${index}`"
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

  import {db, getChats} from '../firebase/firebase.js'

  export default {
    async created() {
        const chats = await getChats(db);
        chats.forEach(chat => {
          this.messages.push(chat)
        });
    },
    data: () => ({
      messages: [],      
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
        this.messages.unshift({message: this.body})
        this.body = ''
      }
    },
  }
</script>

<style scoped>
.message {
  text-align: left;
}
</style>