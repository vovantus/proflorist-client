import { Dialog, DialogTitle, Button, DialogActions } from "@mui/material";

interface CartBouquetDeletionDialogProps {
  open: boolean;
  onCancelPressed: () => void;
  onDeletePressed: () => void;
  bouquetName: string;
}

const CartBouquetDeletionDialog = ({
  open,
  onCancelPressed,
  onDeletePressed,
  bouquetName,
}: CartBouquetDeletionDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onCancelPressed}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Delete {bouquetName} from Cart?
      </DialogTitle>

      <DialogActions>
        <Button onClick={onDeletePressed}>Delete</Button>
        <Button onClick={onCancelPressed}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CartBouquetDeletionDialog;
