import { CloudArrowDown } from "phosphor-react";

export function ModalFooter() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-4">
      <div className="flex flex-row gap-2 items-center justify-center bg-spreadsheetIconBackground rounded-md p-2">
        <CloudArrowDown size={24} color={"#11BA93"} weight="bold" />
        <span className="text-sm font-bold text-spreadsheetText">
          Spreadsheet.xls
        </span>
      </div>

      <div className="flex flex-row gap-2 items-center justify-center bg-documentIconBackground rounded-md p-2">
        <CloudArrowDown size={24} color={"#0073EA"} weight="bold" />
        <span className="text-sm font-bold text-documentText">
          Document.doc
        </span>
      </div>

      <div className="flex flex-row gap-2 items-center justify-center bg-presentationIconBackground rounded-md p-2">
        <CloudArrowDown size={24} color={"#BAA43B"} weight="bold" />
        <span className="text-sm font-bold text-presentationIconText">
          Presentation.ppt
        </span>
      </div>
    </div>
  );
}
