import Compo1G from "../comonentWithGlobalState/compo1G";
import Compo2G from "../comonentWithGlobalState/compo2G";
import Compo3G from "../comonentWithGlobalState/compo3G";
import HashMine from "../comonentWithGlobalState/HashMine";

function ComponentWithGlobalState() {
    return (
        <div className="container mx-auto p-4 h-screen global-state-container">
            <h1 className="text-2xl font-bold mb-4">全局状态组件示例</h1>
            <div className="flex flex-row gap-4 flex-wrap h-1/5">
                <HashMine />
                <Compo1G />
                <Compo2G />
                <Compo3G />
            </div>
        </div>
    );
}

export default ComponentWithGlobalState;