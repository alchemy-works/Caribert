import { css } from '@emotion/css'
import { defineComponent } from 'vue'

const ClassName = css`
    font-size: 20px;
`

export default defineComponent({
    render() {
        return (
            <span class={ClassName}>Caribert</span>
        )
    }
})

