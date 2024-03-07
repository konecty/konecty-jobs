import Image from "next/image";

type Props = {
    nome: String;
    imagem: String;
}

export const Product = (Props) => {
    return (
      <div className="m-5">
        <Image
          src={Props.imagem}
          alt={Props.nome}
          width={120}
          height={120}
          priority
        />
        <p style={{width:120}} className="text-center">{Props.nome}</p>
      </div>
    )
}