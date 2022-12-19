import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Toast } from "./Toast";

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [btnDisabled, setBtnDisabled] = useState(false);

  const onToastClose = () => setBtnDisabled(false);
  const onToastStart = () => setBtnDisabled(true);

  const handleCopy = () => {
    Toast({
      type: 'success',
      message: "Скопировано в буфер",
      options: {
        onClose: onToastClose,
        onOpen: onToastStart,
        autoClose: 1000,
        hideProgressBar: true,
        closeButton: false,
      },
    });
  };

  return (
    <CopyToClipboard onCopy={handleCopy} text={textToCopy}>
      <Button className="code__copy" disabled={btnDisabled} variant="icon">
        <Icon name="Copy" color={"white"} />
      </Button>
    </CopyToClipboard>
  );
};

export { CopyButton };
