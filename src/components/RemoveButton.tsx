'use client';

export default function RemoveButton({ id }: { id: number }) {
  const removeItem = async () => {
    try {
      await fetch('/api/inventory/remove', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      window.location.reload();
    } catch {
      console.log("Remove item failed");
    }
  };

  return (
    <button type="button" onClick={removeItem}>
      remove
    </button>
  );
}