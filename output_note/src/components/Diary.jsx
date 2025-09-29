export function Diary(props ) {
  return (
    <div className="bg-white p-6 m-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow">

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="font-medium text-gray-800">{props.diary.userName}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          {props.diary.date}
        </div>
      </div>

      <div className="mb-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-green-600">
          タイトル
        </span>
        <h2 className="text-2xl font-bold text-gray-900 mt-1">
          {props.diary.title}
        </h2>
      </div>

      <div>
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          内容
        </span>
        <p className="mt-2 text-gray-700 leading-relaxed border-l-4 border-blue-200 pl-3">
          {props.diary.content}
        </p>
      </div>


      <div className="flex justify-end">
        <button className="flex items-center text-red-500 hover:text-red-700 transition-colors"
        onClick={()=>props.onDelete(props.diary.id)}>
          削除
        </button>
      </div>
    </div>
  );
}
