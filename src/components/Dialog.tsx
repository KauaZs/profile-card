import { FaDiscord, FaGithub } from "react-icons/fa"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Switch } from "./ui/switch"

export function DialogEdit() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Editar Perfil</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogDescription>
            Atualize suas informações
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              defaultValue="KauaZs"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="avatar" className="text-right">
              Avatar
            </Label>
            <Input
              id="avatar"
              defaultValue="https//"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="banner" className="text-right">
              Banner
            </Label>
            <Input
              id="banner"
              defaultValue="https//"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="background" className="text-right">
              Cor do fundo da pagina
            </Label>
            <Input
              id="background"
              defaultValue="#00000"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="background-card" className="text-right">
              Cor do fundo do card
            </Label>
            <Input
              id="background=card"
              defaultValue="#00000"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="about" className="text-right">
              Sobre Mim
            </Label>
            <Input
              id="aboutme"
              defaultValue="Sou uma pessoa legal"
              className="col-span-3"
            />
          </div>
        
          <div className="grid grid-cols-4 items-center gap-3 mt-5">
            <Label htmlFor="about" className="flex items-center gap-2 ">
             <FaGithub className="text-lg ml-4"/> Github
            </Label>
            <Input
              id="github"
              defaultValue="https://github.com/KauaZs"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-3 ">
            <Label htmlFor="about" className="flex items-center gap-2 ">
             <FaDiscord className="text-3xl ml-4"/> Discord
            </Label>
            <Input
              id="discord"
              defaultValue="kauazs."
              className="col-span-3"
            />
          </div>
          <div className="flex gap-3 items-center">
          <Switch id="airplane-mode" />
           <label>
             Exibir efeito <span>Espacial</span>
           </label> 

          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
