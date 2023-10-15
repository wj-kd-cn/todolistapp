
import './App.css';

function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">

        <div className="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车确认"/>
        </div>

        <ul className="todo-main">
          <li>
            <label>
              <input type="checkbox" />
              <span>xxxxxx</span>
              <button className="btn btn-danger" style={{display:'none'}}>删除</button>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>yyyyy</span>
              <button className="btn btn-danger" style={{display:'none'}}>删除</button>
            </label>
          </li>

        </ul>
        <div className="todo-footer">
          <label> <input type="checkbox" /></label>
          <span><span>已完成0</span>/ 全部2</span>
          <button className="btn btn-danger">清除已完成的任务</button>
        </div>

      </div>


    </div>

  );
}

export default App;
