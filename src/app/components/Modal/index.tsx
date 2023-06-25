import { Video } from "@/interfaces/Card.interface";
import * as Dialog from "@radix-ui/react-dialog";
import { Card } from "../UI/Card";

interface ModalProps {
  card: Video.Card;
}

export function Modal({ card }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card title={card.title} thumbnail={card.thumbnail} />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-md" />
        <Dialog.Title>
          <h1>Webinar: Como aumentar sua Geração de Leads feat. Traktor</h1>
        </Dialog.Title>

        <Dialog.Content className="fixed inset-0 m-auto flex h-fit w-full max-w-[600px] flex-col items-center justify-center rounded-xl border-t-[12px] border-primary-blue-300 bg-white shadow-lg">
          <div>
            <p>VIDEO AQUI</p>
            <h2>Descrição</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod voluptatum quibusdam quia, voluptatem voluptate, quos, quae
              doloribus voluptatibus quas quidem. Quisquam quod voluptatum
              quibusdam quia, voluptatem voluptate, quos, quae doloribus
              voluptatibus quas quidem.
            </span>
          </div>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
