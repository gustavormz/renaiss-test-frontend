import { IGPTModelModalProps } from './IGPTModelModal'

const GPTModelModal = ({
  handleOnAccept,
  models = [],
  selectedModel = '',
  handleOnChange,
  handleOnClose,
}: IGPTModelModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-96 p-4 rounded-lg shadow-lg z-50">
        <h2 className="text-lg font-semibold mb-4 text-primary-text">Selecciona una opción</h2>

        <select
          onChange={(e) => {
            handleOnChange && handleOnChange(e.target.value)
          }}
          value={selectedModel}
          className="block w-full p-2 border rounded-md text-primary">
          {models.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        <div className="mt-4 text-right">
          <button
            onClick={() => { handleOnAccept && handleOnAccept(selectedModel) }}
            className="px-4 py-2 text-white bg-primary rounded-md mr-2">Aceptar</button>
          <button onClick={handleOnClose} className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md">Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default GPTModelModal
