import { CloudArrowDown } from "phosphor-react";

export function ModalFooter() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-4">
      <div className="flex flex-row gap-2 items-center justify-center bg-spreadsheetIconBackground rounded-md">
        <div className="bg-spreadsheetIconInsideBackground p-2 rounded-l-md">
          <CloudArrowDown size={24} color={"#11BA93"} weight="bold" />
        </div>
        <span className="text-sm font-bold text-spreadsheetText pr-2">
          Spreadsheet.xls
        </span>
      </div>

      <div className="flex flex-row gap-2 items-center justify-center bg-documentContainerBlue rounded-md">
        <div className="bg-documentIconBackground p-2 rounded-l-md">
          <CloudArrowDown size={24} color={"#0073EA"} weight="bold" />
        </div>
        <span className="text-sm font-bold text-documentText pr-2">
          Document.doc
        </span>
      </div>

      <div className="flex flex-row gap-2 items-center justify-center bg-presentationIconContainer rounded-md">
        <div className="bg-presentationIconBackground p-2 rounded-l-md">
          <CloudArrowDown size={24} color={"#BAA43B"} weight="bold" />
        </div>
        <span className="text-sm font-bold text-presentationIconText pr-2">
          Presentation.ppt
        </span>
      </div>
    </div>
  );
}
