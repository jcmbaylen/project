import { useCallback, useMemo, useState } from "react"

const StatePage = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount(count + 1)

    // Shallow Comparison if you compare same function it will return false kaya dun ginagamit si useCallback
    //Problem
    // const test = () => {
    //     return 'test'
    // }
    //Solution
    const test = useCallback(() => {
        return 'test'
    }, [])

    const compute = () => {
        test()
        console.log("compute: computing")
        return 100
    }

    const memoizedCompute = useMemo(() => {
        test()
        console.log("memoizedCompute: computing")
        return 100
    }, [test])

    return (
        <div>
            <div>
                <h1>Use Memo and Use Callback</h1>
                <h2>This is React Crash Course 9</h2>
                <p style={{fontSize: '30px'}}>si <b>useMemo</b> minememoized niya ang <b>value</b></p>
                <p style={{fontSize: '30px'}}>si <b>useCallback</b> minememoized niya ang <b>function</b></p>
                <h3>useMemo</h3>
                <p><b>useMemo</b> for memoized or cinacashed niya yung previous kung wala namang nagbago sa dependency na nilagay mo sa function na yun</p>
                <p><b>useMemo</b> parang useEffect yung porma niya, meron ding <b>DEPENDENCY</b> </p>
                <p><b>useMemo</b> Basta walang nagbabago or walang <b>DEPENDECY</b> na ginagawa, kung ano yung last na nakuha mong value <b>like 100</b>, yun pa din yun <b>100</b> </p>
                <p><b>useMemo</b> minememoized niya ang return value basta walang nagbabago o same value pa din ng nirereturn</p>
                <p><b>useMemo</b> pero kung nagbago and <b>DEPENDENCY</b> kahit na same ang nirereturn, magrereompute pa din yun or magrarun ulit</p>
                <h3>useCallback</h3>
                <p><b>useCallback</b> ginagamit sa pag mememoized ng function</p>
                <p><b>useCallback</b> ginagamit lang siya kapag yung function mo ipapasok mo sa memoized component or sa memoized na <b>useMemo</b> </p>
                <p><b>useCallback</b> importante din na lalagyan ng <b>DEPENDENCY</b> ang useCallback para di na lagi magrarun</p>
            </div>
            <h3>Count: { count }</h3>
            <button
                onClick={ handleIncrement }
            >
                Increment
            </button>
            <div>
                <h1>Compute: { compute() }</h1>
                <h1>Memoized Compute: { memoizedCompute }</h1>
            </div>
            <p>Everytime na nagbabago ang state nagrarun ang <b>compute function</b> or normal function</p>
        </div>
    )
}

export default StatePage