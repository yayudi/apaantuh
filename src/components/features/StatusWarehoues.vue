<template>
  <div>
    <a-tag :color="status" v-for="status in statuses" :key="status">
      <a-icon :icon="getIcon(status)" /> {{ status }}
    </a-tag>
  </div>

  <div>
    <a-tag color="success">
      <template #icon>
        <check-circle-outlined />
      </template>
      success
    </a-tag>
    <a-tag color="processing">
      <template #icon>
        <sync-outlined :spin="true" />
      </template>
      processing
    </a-tag>
    <a-tag color="error">
      <template #icon>
        <close-circle-outlined />
      </template>
      error
    </a-tag>
    <a-tag color="warning">
      <template #icon>
        <exclamation-circle-outlined />
      </template>
      warning
    </a-tag>
    <a-tag color="default">
      <template #icon>
        <clock-circle-outlined />
      </template>
      waiting
    </a-tag>
    <a-tag color="default">
      <template #icon>
        <minus-circle-outlined />
      </template>
      stop
    </a-tag>
  </div>
</template>
<script lang="ts" setup>
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined
} from '@ant-design/icons-vue'

import { Tag } from '@ant-design/vue'

export default search {
  components: {
    ATag: Tag,
    AIcon: CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    WarningOutlined,
    MinusCircleOutlined
  },
  data() {
    return {
      statuses: ['success', 'processing', 'error', 'warning', 'default']
    }
  },
  methods: {
    getIcon(status) {
      const iconMap = {
        success: CheckCircleOutlined,
        processing: ClockCircleOutlined,
        error: CloseCircleOutlined,
        warning: WarningOutlined,
        default: MinusCircleOutlined
      }
      return iconMap[status] || MinusCircleOutlined
    }
  }
}
</script>

<style scoped>
/* Optional styling for the tags */
.a-tag {
  margin: 5px;
}
</style>
