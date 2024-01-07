export const Footer = () => {
  return (
    <footer className="p-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-zinc-100 dark:border-zinc-700/40 border-t">
          <p className="pt-8 text-xs leading-5 text-center">
            &copy; {new Date().getFullYear()} Robert Dobre
          </p>
        </div>
      </div>
    </footer>
  )
}
