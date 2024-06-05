import { Dialog, DialogTitle, Button, DialogActions } from "@mui/material";

interface CartBouquetDeletionDialogProps {
  open: boolean;
  onCancelPressed: () => void;
  onRemovePressed: () => void;
  bouquetName: string;
}

const CartBouquetDeletionDialog = ({
  open,
  onCancelPressed,
  onRemovePressed,
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
        Remove {bouquetName} from cart?
      </DialogTitle>

      <DialogActions>
        <Button onClick={onRemovePressed}>Remove</Button>
        <Button onClick={onCancelPressed}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CartBouquetDeletionDialog;
