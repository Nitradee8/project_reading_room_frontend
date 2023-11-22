export default function Modal({ title, children, maxWidth = 27, open, onClose }) {
    return (
        <>
            {open && (
                <>
                    <div className="fixed inset-0 bg-slate-70 z-20"> </div>
                    <div className="fixed inset-0 z-30">
                        <div className="flex justify-center items-center min-h-full p-4">
                            <div
                                className="rounded-lg w-full bg-rose-900 shadow-2xl border"
                                style={{ maxWidth:` ${maxWidth}rem` }}
                            >
                                <div className="flex justify-between p-5 text-xl border-b">
                                    <div className="invisible">
                                        X
                                    </div>
                                    <div className="font-bold">{title}</div>
                                    <div className="text-back-900 cursor-pointer" onClick={onClose}>
                                        X
                                    </div>
                                </div>
                                <div className="p-8">{children}</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}