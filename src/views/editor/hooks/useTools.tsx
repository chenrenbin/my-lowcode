import {
    DocumentCopy,
    Cellphone,
    RefreshLeft,
    RefreshRight,
    Position,
    Delete,
    ChatLineSquare,
    Download,
    Upload
} from '@element-plus/icons-vue'
import 'element-plus/es/components/message/style/css'

export const useTools = () => {
    return [
        {
            title: '导入',
            icon: Upload,
            onClick: () => {
                console.log('导入')
            }
        },
        {
            title: '导出',
            icon: Download,
            onClick: () => {
                console.log('导出')
            }
        },
        {
            title: '真机',
            icon: Cellphone,
            onClick: () => {
                console.log('真机预览')
            }
        },
        {
            title: '复制',
            icon: DocumentCopy,
            onClick: () => {
                console.log('复制页面')
            }
        },
        {
            title: '撤销',
            icon: RefreshLeft,
            onClick: () => {
                console.log('撤销')
            }
        },
        {
            title: '重做',
            icon: RefreshRight,
            onClick: () => {
                console.log('重做')
            }
        },
        {
            title: '清空',
            icon: Delete,
            onClick: () => {
                console.log('清空页面')
            }
        },
        {
            title: '预览',
            icon: Position,
            onClick: () => {
                console.log('预览')
            }
        },
        {
            title: '反馈',
            icon: ChatLineSquare,
            onClick: () => {
                console.log('反馈')
            }
        }
    ]
}
