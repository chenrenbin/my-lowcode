import type { App, Component } from 'vue'
import 'element-plus/dist/index.css'

import {
    ElContainer,
    ElHeader,
    ElMain,
    ElAside,
    ElConfigProvider,
    ElAffix,
    ElSkeleton,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElScrollbar,
    ElSubMenu,
    ElButton,
    ElCol,
    ElRow,
    ElSpace,
    ElDivider,
    ElCard,
    ElDropdown,
    ElDialog,
    ElMenu,
    ElMenuItem,
    ElDropdownItem,
    ElDropdownMenu,
    ElIcon,
    ElInput,
    ElForm,
    ElFormItem,
    ElLoading,
    ElPopover,
    ElPopper,
    ElTooltip,
    ElDrawer,
    ElPagination,
    ElAlert,
    ElRadioButton,
    ElRadioGroup,
    ElInfiniteScroll,
    ElTabs, 
    ElTabPane
} from 'element-plus'

const components = [
    ElContainer,
    ElHeader,
    ElMain,
    ElAside,
    ElConfigProvider,
    ElAffix,
    ElSkeleton,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElScrollbar,
    ElSubMenu,
    ElButton,
    ElCol,
    ElRow,
    ElSpace,
    ElDivider,
    ElCard,
    ElDropdown,
    ElDialog,
    ElMenu,
    ElMenuItem,
    ElDropdownItem,
    ElDropdownMenu,
    ElIcon,
    ElInput,
    ElForm,
    ElFormItem,
    ElPopover,
    ElPopper,
    ElTooltip,
    ElDrawer,
    ElPagination,
    ElAlert,
    ElRadioButton,
    ElRadioGroup,
    ElTabs, 
    ElTabPane
]

const plugins = [ElLoading, ElInfiniteScroll]

export function setupElementPlus(app: App) {
    components.forEach((component: Component) => {
        app.component(component.name!, component)
    })
    plugins.forEach((plugin) => {
        app.use(plugin)
    })
}
