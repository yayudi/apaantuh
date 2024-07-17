<template>
  <div>
    <a-tag color="success">
      <template #icon>
        <check-circle-outlined />
      </template>
      Complete
    </a-tag>
    <a-tag color="processing">
      <template #icon>
        <sync-outlined :spin="true" />
      </template>
      Processing
    </a-tag>
    <a-tag color="error">
      <template #icon>
        <close-circle-outlined />
      </template>
      Cancel
    </a-tag>
    <a-tag color="warning">
      <template #icon>
        <exclamation-circle-outlined />
      </template>
      Pending
    </a-tag>
    <a-tag color="default">
      <template #icon>
        <clock-circle-outlined />
      </template>
      Draft
    </a-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined
} from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined
  }
})
</script>

<style scoped>
/* Optional styling for the tags */
.a-tag {
  margin: 5px;
}
</style>
