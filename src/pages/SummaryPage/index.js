import React, { useState } from 'react'

const SummaryPage = () => {
    const[checked ,setChecked]  = useState(false)
    return (
        <div>
            <form>
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    id='confirm-checkbox'
                />{" "}
                <label htmlFor=''>주문하려는 것을 확인하셨나요?</label>
                <br />
                    <button disabled ={!checked} type='submit'>
                        주문확인
                    </button>
                
            </form>
        </div>
    )
}

export default SummaryPage