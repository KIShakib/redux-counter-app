import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../../features/counterSlice';

const Counter = () => {
    const [differenceBy, setDifferenceBy] = useState(1);
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className='h-screen flex justify-center items-center px-5 lg:px-0 font-serif'>
            <div className='bg-gradient-to-tr from-indigo  to-pink lg:w-[40%] w-full py-24 rounded shadow-[0_0px_80px_-10px_rgba(255,73,173,0.6)] flex justify-center items-center'>
                <div className='flex flex-col items-center gap-y-5'>
                    <h2 className='text-2xl font-bold text-indigo tracking-wide'>Counter APP</h2>
                    <p className='text-center border-2 border-indigo text-indigo h-9 p-2 flex justify-center items-center rounded-sm text-2xl font-semibold'>{count}</p>
                    <div className='flex gap-x-4 items-center'>
                        <button
                            onClick={() => dispatch(decrement(differenceBy))}
                            className='bg-pink px-3 py-1 rounded-sm active:bg-opacity-70 hover:opacity-80 font-semibold tracking-wide text-indigo'>
                            DECREMENT
                        </button>
                        <button
                            onClick={() => dispatch(reset(0))}
                            className='bg-indigo active:bg-opacity-50 hover:bg-opacity-60 h-[34px] px-4 bg-opacity-75 font-bold text-pink'>
                            RESET
                        </button>
                        <button
                            onClick={() => dispatch(increment(differenceBy))}
                            className='bg-indigo px-3 py-1 rounded-sm active:bg-opacity-70 hover:opacity-80 font-semibold tracking-wide text-pink'>
                            INCREMENT
                        </button>
                    </div>
                    <div className='flex gap-x-3 items-center'>
                        <input
                            onChange={(e) => setDifferenceBy(parseInt(e.target.value))}
                            className='w-[50px] h-[34px] bg-indigo text-lg text-pink text-center appearance-none focus:outline-pink border-pink'
                            type="number"
                            id='differenceBy'
                            name="differenceBy"
                            defaultValue={differenceBy}
                        />
                        <label htmlFor="differenceBy" className='uppercase border px-2 py-1'>Difference By</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;