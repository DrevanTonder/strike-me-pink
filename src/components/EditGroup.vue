<template>
  <div style="margin-left: auto;">
    <edit-icons @edit="open" @remove="remove" />

    <object-modal :active.sync="active" title="Add Group" @save="save" @close="close">
      <group-form v-bind.sync="group" />
    </object-modal>
  </div>
</template>

<script>
import EditIcons from './EditIcons.vue'
import GroupForm from './forms/GroupForm'
import { mapActions } from 'vuex'
import ObjectModal from './ObjectModal.vue'
import { clone } from '../util'

function data () {
  return {
    active: false,
    group: undefined
  }
}

export default {
  components: {
    GroupForm,
    ObjectModal,
    EditIcons
  },

  props: {
    groupId: {
      required: true,
      type: String
    }
  },

  data () {
    return data()
  },

  created () {
    this.getGroup()
  },

  watch: {
    groupId () {
      this.getGroup()
    }
  },

  methods: {
    open () {
      this.active = true
    },

    remove () {
      this.removeGroup(this.group)
      this.removeAudioByGroup(this.group.id)
    },

    save () {
      this.updateGroup(this.group)

      this.close()
    },

    close () {
      this.active = false

      this.reset()
    },

    getGroup () {
      this.group = clone(this.$store.state.groups.items[this.groupId])
    },

    reset () {
      Object.assign(this.$data, data())
      this.getGroup()
    },

    ...mapActions(['updateGroup', 'removeGroup', 'removeAudioByGroup'])
  }
}
</script>
