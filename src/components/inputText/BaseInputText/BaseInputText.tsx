'use client'

import { IBaseInputText } from './IBaseInputText'

const BaseInputText = ({
  icon,
  placeholder,
  onChange,
  onClick,
  value,
}: IBaseInputText) => (
  <div className="relative">
    <input
      value={value}
      onChange={onChange}
      type="text"
      className="w-full pl-4 py-2 pr-8 border rounded-4 text-primary-text text-14"
      placeholder={placeholder}
    />
    {icon && (
      <div
        onClick={(e) => {
          e.stopPropagation();
          onClick && onClick();
        }}
        className="focus:outline-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
        {icon}
      </div>
    )}
  </div>
)

export default BaseInputText
