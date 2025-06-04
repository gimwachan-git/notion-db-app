'use client';
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';

export default function RadixPage() {
  return (
    <main>
      <h1>Radix UI Dialog Example</h1>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="dialogOverlay" />
          <Dialog.Content className="dialogContent">
            <Dialog.Title>Hello from Radix UI</Dialog.Title>
            <Dialog.Description>This is a sample dialog.</Dialog.Description>
            <Dialog.Close asChild>
              <button>Close</button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}
